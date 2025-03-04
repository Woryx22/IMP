import React from "react";

const Pricing = () => {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center bg-[#4c4d6e] p-6">
      <div className="max-w-4xl w-full bg-[#44456d] shadow-lg rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Ceník</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold">Rodinné/ párové/ těhotenské focení</h3>
          <p className="text-lg font-semibold">Cena: 1 500,-</p>
          <p>Výsledkem je 15 upravených fotek předané v elektronické podobě</p>
          <p>Foceni trvá 30-60 minut</p>
        </div>
        
        <div className="mb-6 ">
          <h3 className="text-xl font-bold underline">Svatební balíčky</h3>
          
          <div className="mt-4 ml-2">
            <h4 className="text-lg font-bold">Mini balíček</h4>
            <p className="text-lg font-semibold">Cena: 3 500,-</p>
            <p>Focení zahrnuje obřad, společné fotky s hosty a focení samostatných novomanželů</p>
            <p>Focení přibližně 3 hodiny</p>
          </div>
          
          <div className="mt-4 ml-2">
            <h4 className="text-lg font-bold">Půldenní balíček</h4>
            <p className="text-lg font-semibold">Cena: 6 500,-</p>
            <p>Focení zahrnuje obřad i chvilky před zahájením, focení novomanželů, dále dle programu v časovém rámci balíčku</p>
            <p>Focení na 6 hodin</p>
          </div>
          
          <div className="mt-4 ml-2">
            <h4 className="text-lg font-bold">Celodenní balíček</h4>
            <p className="text-lg font-semibold">Cena: 11 500,-</p>
            <p>Foceni v časovém rámci 11-12 hodin Vašeho svatebního dne</p>
            <p>Doprava do 50 km z výjezdního místa zdarma (Vrchlabí)</p>
            <p>Balíček obsahuje po dokončení upravení všech fotek krabičku obsahující tištěné fotografie (15 ks ve formátu 10x15 cm) + USB flashku</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold">Cestovné</h2>
          <p>Do 20 km zdarma, dále 5,-/ km x 2 (cesta tam a zpět)</p>
          <p>Výjezdní místo: Vrchlabí</p>
          <p>Vztahuje se na veškerá focení</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
