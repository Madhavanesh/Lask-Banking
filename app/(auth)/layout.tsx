import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div className="auth-asset">
            <div>
              <Image src='/icons/lask-image.png' alt="auth image" width={700} height={700} className="border border-black-2" />
            </div>
          </div>
      </main>
    );
  }
  