"use client";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import PayPal from "../assets/payments/paypal.png";
import Visa from "../assets/payments/visa.png";
import Mastercard from "../assets/payments/mastercard.png";
import Klarna from "../assets/payments/klarna.png";
import Image from "next/image";

// creazione footer con qualche piccolo effetto all'hover e gestione della responsive

export default function Footer() {
  return (
    <footer className="bg-gray-50 rounded-t-xl text-center text-gray-600 py-4 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          <div>
            <h3 className="font-bold text-lg mb-1">Link Utili</h3>
            <ul className="md:mb-5 lg:mb-0">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contatti
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Modalità di pagamento
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Tempi e costi di spedizione
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Prodotti</h3>
            <ul className="md:mb-5 lg:mb-0">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Luxury
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Nuovi arrivi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Occhiali da vista
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Occhiali da sole
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Supporto</h3>
            <ul className="md:mb-5 lg:mb-0">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Garanzia
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Politiche di ritorno
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Politiche di Reso
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Pagamenti sicuri</h3>
            <p>Visa, Paypal, Mastercard, Poste-Pay, AmazonPay, Scalapay, Klarna o alla consegna.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <div className="payment">
                <Image src={PayPal} alt="PayPal" layout="responsive" />
              </div>
              <div className="payment">
                <Image src={Visa} alt="Visa" layout="responsive" />
              </div>
              <div className="payment">
                <Image src={Mastercard} alt="Mastercard" layout="responsive" />
              </div>
              <div className="payment">
                <Image src={Klarna} alt="Klarna" layout="responsive" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <p>&copy; {new Date().getFullYear()} Centro Ottico Rizzo - Tutti i diritti riservati.</p>
          <p>
            <PhoneIcon className="inline h-5 w-5 mr-2" aria-hidden="true" />
            0824 1720615 |
            <EnvelopeIcon className="inline h-5 w-5 mx-2" aria-hidden="true" />
            info@centrootticorizzo.it
          </p>
          <p>P.IVA 01372050623</p>
        </div>
      </div>
    </footer>
  );
}
