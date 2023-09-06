import { useState } from 'react';

const IdiomSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIdiom, setSelectedIdiom] = useState('Português'); // Idioma padrão

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleIdiomSelect = (idiom: string) => {
    setSelectedIdiom(idiom);
    setIsDropdownOpen(false); // Fechar o dropdown após selecionar um idioma
  };

  const idiomOptions = ['Português', 'Inglês', 'Espanhol', 'Francês']; // Adicione as opções de idioma desejadas aqui

  return (
    <div className="relative inline-block">
      <div
        className="flex flex-row gap-[5px] items-center justify-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <p className="text-[10px] text-[#464444] opacity-70">{selectedIdiom}</p>
        <img src="./Vector.png" className="w-[21px]" alt="Dropdown Arrow" />
      </div>

      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 p-2 bg-[#F4F1ED] rounded shadow-lg">
          {idiomOptions.map((idiom) => (
            <div
              key={idiom}
              className="cursor-pointer hover:bg-gray-100 p-1"
              onClick={() => handleIdiomSelect(idiom)}
            >
              {idiom}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IdiomSelector;
