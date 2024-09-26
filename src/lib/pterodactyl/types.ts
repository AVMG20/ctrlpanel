export interface Listing<T> {
    object: 'list';
    data: T[];
}

export interface EggVariable {
    object: 'egg_variable';
    attributes: {
        readonly id: number;
        readonly egg_id: number;
        readonly name: string;
        readonly description?: number;
        readonly env_variable: string;
        readonly default_value: string;
        readonly user_viewable: boolean;
        readonly user_editable: boolean;
        readonly rules: string;
        readonly created_at: string | Date;
        updated_at: string | Date;
        server_value: string;
    }
}

export interface Egg {
    object: 'egg';
    attributes: {
        readonly id: number;
        readonly uuid: string;
        readonly name: string;
        readonly nest: number;
        readonly author: string;
        description?: null | string;
        docker_image: string;
        docker_images: { [key: string]: string };
        readonly config: {
            files: {
                [key: string]: {
                    parser: string;
                    find: { [key: string]: string };
                };
            };
            startup: {
                done: string;
                userInteraction: Array<unknown>;
            };
            stop: string;
            logs: Array<unknown>;
            file_denylist: Array<unknown>;
            extends?: null | string;
        };
        startup: string;
        script: {
            privileged: boolean;
            install: string;
            entry: string;
            container: string;
            extends?: null | string;
        };
        readonly created_at: string | Date;
        updated_at: string | Date;
        readonly relationships?: {
            readonly variables?: EggVariable;
        };
    }
}

export interface Nest {
    object: 'nest';
    attributes: {
        readonly id: number;
        readonly uuid: string;
        readonly author: string;
        name: string;
        description?: null | string;
        readonly created_at: string | Date;
        updated_at: string | Date;
        readonly relationships?: {
            readonly eggs?: Listing<Egg>;
        };
    }
}

export interface Location {
    object: 'location';
    attributes: {
        readonly id: number;
        readonly short: string;
        readonly long: string;
        readonly created_at: string | Date;
        updated_at: string | Date;
    }
}