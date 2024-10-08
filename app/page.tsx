import Navigation from "@/app/components/nav";

export default function Home() {
    return (
        <div className="min-h-screen min-w-full bg-cover bg-space-pattern-mobile">
            <Navigation></Navigation>
            <main className="flex flex-col justify-center items-center text-white h-full">
                <div className="flex flex-col w-full items-center justify-center p-6">
                    <h3 className="mt-6 text-md font-barlow-condensed font-light tracking-wider">SO, YOU WANT TO TRAVEL
                        TO</h3>
                    <h1 className="my-6 font-bellefair font-thin font text-7xl tracking-tight">SPACE</h1>
                    <p className="text-center font-light text-md text-space-blue-300">
                        Let’s face it; if you want to go to space, you might
                        as well genuinely go to outer space and not
                        hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of
                        this world experience!</p>
                </div>
                <div
                    className="my-16 w-32 h-32 shrink-0 grow-0 rounded-full bg-white items-center flex justify-center hover:animate-pulse focus:animate-pulse ease-out hover:cursor-pointer">
                    <button
                        className="font-bellefair text-lg text-space-blue-900">EXPLORE
                    </button>
                </div>
            </main>
        </div>
    );
}
