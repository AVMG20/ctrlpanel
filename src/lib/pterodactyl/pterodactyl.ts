import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {Listing, Nest, Location, Egg} from "@/lib/pterodactyl/types";
import { unstable_cache } from 'next/cache';

interface PterodactylSettings {
    apiKey: string;
    url: string;
}

class PterodactylClient {
    private static readonly PER_PAGE = 500;
    private client: AxiosInstance;

    constructor(settings: PterodactylSettings) {
        this.client = this.createClient(settings);
    }

    private createClient(settings: PterodactylSettings): AxiosInstance {
        const baseUrl = settings.url.replace(/\/+$/, '');

        return axios.create({
            baseURL: `${baseUrl}/api/`,
            headers: {
                Authorization: `Bearer ${settings.apiKey}`,
                'Content-Type': 'application/json',
                Accept: 'Application/vnd.pterodactyl.v1+json',
            },
        });
    }

    public getLocations = unstable_cache(
        async (): Promise<Listing<Location>> => {
            const result = await this.client.get<Listing<Location>>(`application/locations?per_page=${PterodactylClient.PER_PAGE}`);
            return result.data;
        },
        ['pterodactyl-locations'],
        {
            tags: ['pterodactyl'],
            revalidate: 300, // 5 minutes
        }
    );

    public async getEggs(nestId: number): Promise<AxiosResponse> {
        return await this.client.get(`application/nests/${nestId}/eggs?include=nest,variables&per_page=${PterodactylClient.PER_PAGE}`);
    }

    public getNests = unstable_cache(
        async (): Promise<Listing<Nest>> => {
            const result = await this.client.get<Listing<Nest>>(`application/nests?include=eggs&per_page=${PterodactylClient.PER_PAGE}`);
            return result.data;
        },
        ['pterodactyl-nests'],
        {
            tags: ['pterodactyl'],
            revalidate: 300,  // 5 minutes
        }
    );

    public async getServers(): Promise<AxiosResponse> {
        return await this.client.get(`application/servers?per_page=${PterodactylClient.PER_PAGE}`);
    }

    public async getNodes(): Promise<AxiosResponse> {
        return await this.client.get(`application/nodes?per_page=${PterodactylClient.PER_PAGE}`);
    }

    public async getServer(pterodactylId: number): Promise<AxiosResponse> {
        return await this.client.get(`application/servers/${pterodactylId}`);
    }

    public async getUser(pterodactylId: number): Promise<AxiosResponse> {
        return await this.client.get(`application/users/${pterodactylId}`);
    }

    public async getUserByEmail(email: string): Promise<AxiosResponse> {
        return await this.client.get(`application/users?filter[email]=${email}`);
    }

    public async createUser(data: object): Promise<AxiosResponse> {
        return await this.client.post(`application/users`, data);
    }

    public async createServer(data: object): Promise<AxiosResponse> {
        return await this.client.post(`application/servers`, data);
    }

    public async updateServerBuild(pterodactylId: number, data: object): Promise<AxiosResponse> {
        return await this.client.patch(`application/servers/${pterodactylId}/build`, data);
    }

    public async updateServerDetails(pterodactylId: number, data: object): Promise<AxiosResponse> {
        return await this.client.patch(`application/servers/${pterodactylId}/details`, data);
    }

    public async deleteServer(pterodactylId: number): Promise<AxiosResponse> {
        return await this.client.delete(`application/servers/${pterodactylId}`);
    }
}

const client = new PterodactylClient({
    apiKey: process.env.PTERODACTYL_API_KEY as string,
    url: process.env.PTERODACTYL_URL as string,
});

export default client;