import TypeWriter from "typewriter-effect";

const Content1 = () => {
    return (
        <div className="border-2 border-red-300">
            <div className="w-full h-screen grid gap-4 place-content-center mt-[-96px]">
                <h1 className="text-[#CE2E3D] font-bold text-5xl md:text-6xl lg:text-8xl">SILENT KILLER</h1>
                <div className="text-[#0A415E] font-bold text-3xl md:text-5xl lg:text-6xl">
                    <TypeWriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: ["Udara Buruk : Ancaman Kesehatan"],
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Content1;
