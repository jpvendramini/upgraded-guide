import "@styles/global.css";

export const metadata = {
  title: "Rinha Backend - Contribuidores",
  description: "Some description for my website",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <div className="w-full flex justify-center">
          <div className="w-[80rem] flex flex-col justify-center items-center py-12 gap-8">
            <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3D00] to-[#00A3FF] text-[2rem]">
              Contribuidores
            </h1>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

const AuthFlow = () => {};
