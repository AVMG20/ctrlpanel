@extends('layouts.app')

@section('title', 'Game Hosting')

@section('content')
    <div class="space-y-16">
        <div class="container m-auto">
            <div class="prose block min-w-full text-center mb-8">
                <h1>{{ __("Game Hosting Locations") }}</h1>
            </div>
            <div class="flex flex-row flex-wrap justify-center gap-4">
                <!-- Location Cards -->
                @for ($i = 0; $i < 3; $i++)
                    <div class="card w-80 bg-base-200 @if($i == 1) bg-base-300 @endif transform transition-transform hover:scale-105 cursor-pointer overflow-hidden">
                        <div class="card-body p-6">
                            <h2 class="card-title flex items-center space-x-3 text-lg font-bold mb-4">
                                <div class="inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect>
                                        <path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z"
                                              fill="#a62842"></path>
                                        <path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z"
                                              fill="#a62842"></path>
                                        <path fill="#a62842" d="M2 11.385H31V13.231H2z"></path>
                                        <path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path>
                                        <path fill="#a62842" d="M1 18.769H31V20.615H1z"></path>
                                        <path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z"
                                              fill="#a62842"></path>
                                        <path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z"
                                              fill="#a62842"></path>
                                        <path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path>
                                        <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                                              opacity=".15"></path>
                                        <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                                              fill="#fff"
                                              opacity=".2"></path>
                                        <path fill="#fff"
                                              d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"></path>
                                        <path fill="#fff"
                                              d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"></path>
                                        <path fill="#fff"
                                              d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"></path>
                                        <path fill="#fff"
                                              d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"></path>
                                        <path fill="#fff"
                                              d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"></path>
                                        <path fill="#fff"
                                              d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"></path>
                                        <path fill="#fff"
                                              d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"></path>
                                        <path fill="#fff"
                                              d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"></path>
                                        <path fill="#fff"
                                              d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"></path>
                                        <path fill="#fff"
                                              d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"></path>
                                        <path fill="#fff"
                                              d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"></path>
                                        <path fill="#fff"
                                              d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"></path>
                                        <path fill="#fff"
                                              d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"></path>
                                        <path fill="#fff"
                                              d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"></path>
                                        <path fill="#fff"
                                              d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"></path>
                                        <path fill="#fff"
                                              d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"></path>
                                        <path fill="#fff"
                                              d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"></path>
                                        <path fill="#fff"
                                              d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"></path>
                                    </svg>
                                </div>
                                <span>America</span>
                            </h2>
                            <div class="prose">
                                <table>
                                    <tr>
                                        <td>CPU</td>
                                        <td>Xeon E5-2667 | E5-1650v4 | E5-2680</td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>DDR3 1600 MHz</td>
                                    </tr>
                                    <tr>
                                        <td>Port</td>
                                        <td>1 GBps Up/Down</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                @endfor
            </div>
        </div>

        <div class="bg-base-300">
            <div class="container m-auto py-8">
                <div class="prose block min-w-full text-center my-8">
                    <h2>{{ __("Select a plan") }}</h2>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">

                    @php
                        $initialPrice = 120;
                        $discount = 20;
                    @endphp

                    @for ($i = 1; $i < 9; $i++)

                        <div class="card w-full max-w-sm mx-auto bg-base-200 rounded-lg overflow-hidden hover:shadow-xl shadow-primary transition-shadow duration-300">
                            <div class="card-body p-6">
                                <h2 class="card-title text-2xl font-bold mb-4">Premium Plan {{$i}}</h2>
                                <div class="prose mb-4">
                                    <p>Experience the best performance for your gaming needs with our Premium Plan.</p>
                                    <ul>
                                        <li><strong>vCPU:</strong> {{$i}}</li>
                                        <li><strong>RAM:</strong> {{$i * 2}} GB</li>
                                        <li><strong>Storage:</strong> {{$i * 16}} GB SSD</li>
                                        <li><strong>Bandwidth:</strong> Unlimited</li>
                                    </ul>
                                    @php
                                        $price = ($initialPrice * pow(2, $i - 1)) - ($discount * ($i - 1));
                                    @endphp
                                    <p><strong>Price:</strong> {{ number_format($price, 0, ',', '.') }}  credits / month</p>
                                    <div class="flex items-center justify-between">
                                        <a href="{{route('checkout')}}" class="btn btn-primary flex-grow mr-2">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endfor


                </div>
            </div>
        </div>
    </div>

@endsection
