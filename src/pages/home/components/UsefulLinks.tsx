
export default function UsefulLinks() {
  const links = [
    {
      title: "Cartographie des structures de protection",
      logo: "https://cape.social.gouv.bj/assets/template2/images/logo-masm-2.png",
      url: "https://acteursprotection.social.gouv.bj/"
    },
    {
      title: "Site web du Ministère des Affaires Sociales et de la Microfinance (MASM)",
      logo: "https://cape.social.gouv.bj/assets/template2/images/logo-masm-2.png",
      url: "https://social.gouv.bj/"
    },
    {
      title: "Secrétariat Général du Gouvernement",
      logo: "https://cape.social.gouv.bj/assets/template2/images/sgg-gouv-bj.png",
      url: "https://sgg.gouv.bj/"
    },
    {
      title: "Bibliothèque numérique du MASM",
      logo: "https://cape.social.gouv.bj/assets/template2/images/sgg-gouv-bj.png",
      url: "https://bibliotheque.social.gouv.bj/pe"
    }
  ];

  return (
    <section className="py-16 px-6 bg-teal-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">LIENS UTILES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center cursor-pointer"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src={link.logo} alt="" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="font-medium text-gray-900 text-sm leading-relaxed">{link.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
