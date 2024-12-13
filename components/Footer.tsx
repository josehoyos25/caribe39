import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import { 
  BsWhatsapp, 
  BsInstagram, 
  BsTwitter, 
  BsFacebook, 
  BsInfoCircle, 
  BsTools 
} from "react-icons/bs";

const Footer = () => {
  // Mapear íconos para las redes sociales y otras secciones
  const socialIcons = {
    WhatsApp: <BsWhatsapp className="text-green-500" />,
    Instagram: <BsInstagram className="text-pink-500" />,
    Twitter: <BsTwitter className="text-blue-500" />,
    Facebook: <BsFacebook className="text-blue-700" />,
  };

  const otherIcons = {
    "Misión y Visión": <BsInfoCircle className="text-blue-500" />,
    "Objetivos": <BsInfoCircle className="text-blue-500" />,
    "Politica de Calidad": <BsInfoCircle className="text-blue-500" />,
    "Valores Corporativos": <BsInfoCircle className="text-blue-500" />,
    "Citas Taller": <BsTools className="text-gray-700" />,
    "Accesorios": <BsTools className="text-gray-700" />,
    "Renault Servicios": <BsTools className="text-gray-700" />,
  };

  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/Logo_Caribe.jpg"
            alt="Logo Caribe"
            width={150}
            height={30}
            className="object-contain bg-black"
          />
          <p className="text-base text-gray-700">
            Renault Caribe - Cali 2024 <br />
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="flex items-center gap-2 text-gray-500"
                >
                  {/* Mostrar ícono si existe en el mapeo */}
                  {(socialIcons[item.title] || otherIcons[item.title]) && (
                    <span className="text-lg">
                      {socialIcons[item.title] || otherIcons[item.title]}
                    </span>
                  )}
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>Caribe S.A.S. Todos los Derechos Reservados &copy;</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Política de Privacidad
          </Link>
          <Link href="/" className="text-gray-500">
            Términos y condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
