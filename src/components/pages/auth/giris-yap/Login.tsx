import { Button } from "@/components/ui/button"
import "@/styles/common-them.css"
import Image from 'next/image'

function Login() {
    return (
        <main style={{ height: "100vh", display: "flex", alignItems: "center" }}>
            <div className="container mx-auto">
                <div className="grid grid-cols-2">
                    <div className="flex items-center justify-center">
                        <Image src="/images/x-vektor.png" width={345} height={310} alt="" />
                    </div>
                    <div>
                        <p className="lg:text-6xl md:text-4xl text-2xl">
                            Şu anda olup <br /> bitenler
                        </p>
                        <p className="text-">Hemen Katıl</p>
                        <div>
                            <Button variant={"berkan"}>
                                <Image src={"/images/apple-icon.png"} width={20} height={20} alt="Apple Icon" />
                                Apple ile Kaydol
                            </Button>
                            <div className="flex items-center">
                                <div className="w-[100%] h-[1px] bg-[#2F3336]"></div>
                                <div className="px-3 text-base color-[#E7E9EA]">VEYA</div>
                                <div className="w-[100%] h-[1px] bg-[#2F3336]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Login