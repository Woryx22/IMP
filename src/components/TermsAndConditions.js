import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Podmínky používání webu
        </h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">1. Úvod</h2>
          <p className="text-gray-700">
            Tento web spravuje Kateřina Horáčková. Použitím tohoto webu souhlasíte s podmínkami stanovenými na této stránce. 
            Pokud nesouhlasíte s těmito podmínkami, doporučujeme vám web nepoužívat.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">2. Shromažďování údajů</h2>
          <p className="text-gray-700">
            Tento web sbírá osobní údaje prostřednictvím kontaktního formuláře, který uživatelé mohou vyplnit. Shromážděné údaje 
            používáme pouze pro účely komunikace a odpovědí na vaše dotazy. Pokud s uchováním informací nesouhlasíte, kontaktujte mě prosím na: katerinasfotakem@seznam.cz s výslovnou žádostí.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">3. Cookies</h2>
          <p className="text-gray-700">
            Tento web používá cookies pouze pro analýzu návštěvnosti a zlepšení uživatelské zkušenosti. Cookies nebudou použity 
            k žádným jiným účelům, než je monitorování návštěvnosti a analýza chování uživatelů na webu.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">4. Ochrana osobních údajů</h2>
          <p className="text-gray-700">
            Všechny osobní údaje, které nám poskytnete, budou chráněny v souladu s platnými zákony o ochraně osobních údajů. 
            Vaše údaje nebudou předávány třetím stranám bez vašeho souhlasu.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">5. Změny podmínek</h2>
          <p className="text-gray-700">
            Tyto podmínky mohou být čas od času aktualizovány. O změnách vás budeme informovat prostřednictvím této stránky. 
            Doporučujeme pravidelně kontrolovat tuto stránku.
          </p>
        </section>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>
            Tento web spravuje Kateřina Horáčková. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
