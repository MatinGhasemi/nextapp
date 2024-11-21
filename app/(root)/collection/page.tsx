import Link from "next/link";
import url from "../../production";
import Navbar from "@/app/components/darkNavbar";

// export const fetchData = async (): Promise<RecipeType[]> => {
//   const response = await axios.get(`http://api.recipeapp.soroushsalari.com/recipes/recipes?page=1&per_page=8`);
//   if (response.status === 200) {
//     return response.data.items;
//   }
//   return [];
// };

export default function Home() {
  // const recipes = await fetchData();

  return (<>
    <Navbar />
    <div className="bg-background max-w-[440px] mx-auto">
      <div className="px-3">
        <div className="flex justify-center">
          <div className="relative -bottom-6 bg-11 text-center w-32 h-32">
            <img className="absolute top-0 left-0 w-full h-full" src={`${url}101.png`} width={80} height={80} alt="10"/>
            <div className="text-center pt-3 z-10">
              <p className="text-4xl italic text-foreground">October</p>
              <p className="text-foreground text-sm font-light tracking-widest">COLLECTION</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative -top-6">
            <Link href="/collection/detail"><img id="October" src={`${url}image 20.png`} alt="woman" /></Link>
            <div className="absolute bottom-10 -right-4">
              <img className="w-40 h-32" src={`${url}10.png`} alt="" />
            </div>
            <div className="flex justify-between h-5 mt-2 items-center gap-2 text-foreground">
              <p className="italic">01</p>
              <hr className="w-full opacity-10"/>
              <p className="whitespace-nowrap text-sm font-light tracking-widest">OCTOBER COLLECTION</p>
            </div>
          </div>
          <div className="mt-2">
            <Link href="/collection/detail"><img id="Black" src={`${url}image 21.png`} alt="woman" /></Link>
            <div className="flex justify-between h-5 mt-2 items-center gap-2 text-foreground">
              <p className="italic">02</p>
              <hr className="w-full opacity-10"/>
              <p className="whitespace-nowrap text-sm font-light tracking-widest">BLACK COLLECTION</p>
            </div>
          </div>
          <div className="my-8">
            <Link href="/collection/detail"><img id="Hae" src={`${url}image 22.png`} alt="woman" /></Link>
            <div className="flex justify-between h-5 mt-2 items-center gap-2 text-foreground">
              <p className="italic">03</p>
              <hr className="w-full opacity-10"/>
              <p className="whitespace-nowrap text-sm font-light tracking-widest">HAE BY HAEKIM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>);
}
