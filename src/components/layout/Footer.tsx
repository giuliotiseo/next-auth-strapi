import Link from "next/link";
import Logo from "./Logo";
import { FiFacebook, FiLinkedin, FiMapPin, FiTwitter, FiYoutube } from "react-icons/fi";

const year = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-8">
          <div className="col-span-1 flex flex-col">
            <Logo />
            <ul className="flex flex-1 items-end text-lightBlue mt-8">
              <li className="inline-flex text-sm opacity-70 hover:opacity-100"><Link href="/privacy-and-cookie-policy">Privacy & Cookie policy</Link></li>
              {/* <li className="inline-flex border-l ml-4 pl-4 text-sm opacity-70 hover:opacity-100"><Link href="#">Cookie policy</Link></li> */}
            </ul>
          </div>

          <div className="col-span-1">
            <ul className="text-base flex flex-col uppercase font-bold gap-2">
              <li><Link href="#" className="opacity-70 hover:opacity-100 transition-all">Home</Link></li>
              {/* <li><Link href="#" className="opacity-70 hover:opacity-100 transition-all">Chi siamo</Link></li>
              <li><Link href="#" className="opacity-70 hover:opacity-100 transition-all">Servizi</Link></li>
              <li><Link href="#" className="opacity-70 hover:opacity-100 transition-all">Corsi</Link></li>
              <li><Link href="#" className="opacity-70 hover:opacity-100 transition-all">News</Link></li>
              <li><Link href="#" className="opacity-70 hover:opacity-100 transition-all">Contatti</Link></li> */}
              <li><Link href="/login" className="opacity-70 hover:opacity-100 transition-all">Accedi</Link></li>
              <li><Link href="/register" className="opacity-70 hover:opacity-100 transition-all">Registrati</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <dl>
              <dt className="font-bold uppercase text-sm font-title">Tel:</dt>
              <dd className="mb-4">+39 380 599 6212</dd>
              <dt className="font-bold uppercase text-sm font-title">Email:</dt>
              <dd className="mb-4">apl@anapia.it</dd>
              {/* <dt className="font-bold uppercase text-sm font-title">Pec:</dt>
              <dd className="mb-4">presidenza.anapia@legpec.it</dd> */}
            </dl>
          </div>
          
          <div className="col-span-1 flex flex-col">
            <h4 className="uppercase font-bold font-title text-sm">Seguici</h4>
            <ul className="flex items-center gap-4 text-lg mt-4">
              <li><Link href="#" className="opacity-70 hover:opacity-100 transition-all"><FiFacebook /></Link></li>
              <li><Link href="#" className="opacity-70 hover:opacity-100 transition-all"><FiTwitter /></Link></li>
              <li><Link href="#" className="opacity-70 hover:opacity-100 transition-all"><FiLinkedin /></Link></li>
              <li><Link href="#" className="opacity-70 hover:opacity-100 transition-all"><FiYoutube /></Link></li>
            </ul>

            <div className="flex flex-1 items-end mt-8">
              <div className="flex gap-4">
                <FiMapPin className="text-2xl top-2 relative opacity-50" />
                <div>
                  <p>Roma (00143)</p>
                  <p>Via in Lucina 10</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <p className="text-sm text-center p-4">© {year} Handmade by <Link href="https://flussodigitale.it" className="font-bold hover:text-secondary">Digital Documents Solution</Link> | 02911140602</p>
    </footer>
  )
}

export default Footer;