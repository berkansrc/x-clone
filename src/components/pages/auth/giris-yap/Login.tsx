import { Button } from "@/components/ui/button"
import "@/styles/common-them.css"
import Image from 'next/image'
import Link from "next/link"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
function Login() {
    return (
        <main style={{ height: "100vh" }} className="flex lg:items-center">
            <div className="container mx-auto px-10 lg:pt-0 pt-10">
                <div className="grid lg:grid-cols-2 lg:gap-0 gap-20">
                    <div className="flex lg:items-center lg:justify-center ">
                        <Image src="/images/x-vektor.png" width={345} height={310} className="lg:w-[345px] w-[50px] lg:h-[345px] h-[50px]" alt="" />
                    </div>
                    <div>
                        <p className="lg:text-6xl  text-4xl font-bold mb-8">
                            Şu anda olup <br /> bitenler
                        </p>
                        <p className="text-4xl font-bold mb-5">Hemen Katıl</p>
                        <div className="w-[300px]">
                            <Button variant={"white"} className="w-[100%]">
                                <Image src={"/images/apple-icon.png"} width={20} height={20} alt="Apple Icon" />
                                Apple ile Kaydol
                            </Button>
                            <div className="flex items-center my-[10px]">
                                <div className="w-[100%] h-[1px] bg-[#2F3336]"></div>
                                <p className="px-3 text-base color-[#E7E9EA] ">VEYA</p>
                                <div className="w-[100%] h-[1px] bg-[#2F3336]"></div>
                            </div>
                            <Button className="w-[100%] font-bold mb-[10px]">
                                Hesap Oluştur
                            </Button>
                            <small className="text-xs">
                                By signing up, you agree to the
                                <Link href={"#"} className="text-[#1D9BF0] "> Terms of Service</Link> and
                                <Link href={"#"} className="text-[#1D9BF0] "> Privacy Policy</Link> , including
                                <Link href={"#"} className="text-[#1D9BF0] "> Cookie Use</Link>.
                            </small>
                            <div className="mt-10">
                                <p className="text-lg font-bold mb-3">Zaten bir hesabın var mı?</p>
                                <Button variant={"outline"} size={"lg"} className="w-[100%] font-bold mb-[10px]">
                                    Giriş Yap
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you&apos;re
                                done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-3 relative">
                                <Input id="name" name="name" className="h-[60px] pt-5 peer" />
                                <Label htmlFor="name" className="text-[#71767b] absolute top-[25px] peer-focus:top-[10px] peer-focus:left-[10px] left-[15px]">İsim</Label>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="username-1">Telefon</Label>
                                <Input id="phone" name="phone" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit" variant={"white"}>İleri</Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </main>
    )
}

export default Login