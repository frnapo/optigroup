"use client";

// creazione footer con qualche piccolo effetto all'hover e gestione della responsive

export default function Footer() {
  return (
    <footer className="bg-gray-100 rounded-t-xl text-center text-gray-600 py-4 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          <div>
            <h3 className="font-bold text-lg mb-1">Servizi</h3>
            <ul className="md:mb-5 lg:mb-0">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Controllo della vista
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Montature
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Lenti a contatto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Riparazioni
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Prodotti</h3>
            <ul className="md:mb-5 lg:mb-0">
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
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Accessori
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Prodotti di pulizia
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Informazioni</h3>
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
                  Orari di apertura
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Ubicazione
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
                  Politiche di ritorno
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Garanzia
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Mappa del sito
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <p>&copy; {new Date().getFullYear()} Centro Ottico Rizzo - Tutti i diritti riservati.</p>
          <p>Telefono: 0824 1720615 | Email: info@centrootticorizzo.it</p>
          <p>P.IVA 01372050623</p>
        </div>
      </div>
    </footer>
  );
}
