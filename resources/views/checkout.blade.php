@extends('layouts.app')

@section('title', 'Game Hosting')

@section('content')
    <div class="container mx-auto p-6">
        <div class="flex flex-wrap -mx-3">
            <!-- Form Section -->
            <div class="w-full lg:w-2/3 px-3">
                <div class="bg-base-200 p-6 rounded-lg">
                    <h2 class="text-2xl font-bold mb-4">Configure</h2>
                    <p class="mb-4">Configure your desired options and continue to checkout.</p>

                    <h3 class="text-xl font-semibold mb-2">Bargain-9 Ptero</h3>
                    <p class="mb-2">9 GB Ram Bargain Minecraft</p>
                    <p class="mb-4"><strong>FREEBIES Included:</strong></p>
                    <ul class="list-disc list-inside mb-4">
                        <li>Free Website Hosting</li>
                        <li>Free Dedicated IP</li>
                    </ul>

                    <h3 class="text-xl font-semibold mb-2">Choose Billing Cycle</h3>
                    <p class="mb-4">1 Month Price - $7.65 USD</p>

                    <h3 class="text-xl font-semibold mb-2">Configurable Options</h3>
                    <div class="mb-4">
                        <label class="block mb-2">Location</label>
                        <select class="select select-bordered w-full">
                            <option>Random Location</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">Dedicated IP</label>
                        <input type="checkbox" class="checkbox checkbox-primary">
                        <span class="ml-2">Dedicated IP means your server will have a unique IP address, and will run on the default 25565 port. $4.50 USD</span>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">Minecraft Version</label>
                        <select class="select select-bordered w-full">
                            <option>Java Edition</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">Amount of Ports</label>
                        <input type="number" class="input input-bordered w-full" value="+3 Ports">
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">Access to off-site backups</label>
                        <select class="select select-bordered w-full">
                            <option>No access</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2">DDoS Protection</label>
                        <select class="select select-bordered w-full">
                            <option>BASIC</option>
                        </select>
                    </div>

                    <h3 class="text-xl font-semibold mb-2">Additional Information <span class="text-sm font-normal">(required fields are marked with *)</span></h3>
                    <div class="mb-4">
                        <label class="block mb-2">Server Name *</label>
                        <input type="text" class="input input-bordered w-full" placeholder="Enter server name">
                    </div>
                </div>
            </div>

            <!-- Details Section -->
            <div class="w-full lg:w-1/3 px-3 mt-6 lg:mt-0">
                <div class="sticky top-4">
                    <div class="bg-base-200 p-6 rounded-lg">
                        <h3 class="text-xl font-semibold mb-4">Details</h3>
                        <p><strong>Bargain-9 Ptero</strong></p>
                        <p>Bargain Minecraft Hosting [Ptero]</p>
                        <p>Bargain-9 Ptero $7.65 USD</p>
                        <ul class="list-disc list-inside mb-4">
                            <li>Location: Random Location $0.00 USD</li>
                            <li>Dedicated IP: No $0.00 USD</li>
                            <li>Minecraft Version: Java Edition $0.00 USD</li>
                            <li>Amount of Ports: +3 Ports $0.00 USD</li>
                            <li>Access to off-site backups: No access $0.00 USD</li>
                            <li>DDoS Protection: BASIC $0.00 USD</li>
                        </ul>
                        <p><strong>Setup Fees:</strong> $0.00 USD</p>
                        <p><strong>Monthly:</strong> $7.65 USD</p>
                        <p class="text-xl font-bold mt-4"><strong>Total Due Today:</strong> $7.65 USD</p>
                        <button class="btn btn-success btn-block mt-4">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
