import React from 'react'

const abc = () => {
    return (
        <div>
            <header className="dotted-gradient z-30 mx-auto flex h-16 w-full max-w-screen-desktop items-center justify-between px-4 py-2 desktop:px-2 svelte-riq23s"><a href="/">

                <img src="https://p1.edge.duggup.com/logo/profile-transparent-blue.svg" className="min-w-[100px]" alt="profile"></a>
                <div className="flex gap-1 desktop:gap-4">
                    <a href="/login" tabindex="0" className="flex items-center justify-center text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-brand-profile_brand_navy w-max rounded-full border-0 bg-transparent hover:bg-brand-profile_sky_lighter/40 h-10 px-4 py-2" data-button-root="">Login</a>
                    
                    <button type="button" tabindex="0" className="flex items-center justify-center text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-brand-profile_brand_navy bg-brand-profile_sky_lighter w-max rounded-full hover:bg-brand-profile_brand_navy hover:text-white h-10 px-4 py-2" data-button-root="">Claim your profile</button>
                </div>
            </header>
        </div>
    )
}

export default abc