import React from 'react';


const TopNav = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-300">
            <div className="flex items-center space-x-4">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-full border-4 border-teal-500"
                />
                <div>
                    <h1 className="text-2xl font-bold text-teal-600">Isis Stephanie Mejia Cornejo</h1>
                    <p className="text-teal-500">Verzorgende IG (MBO Niveau 3) | Bachelor in Verpleegkunde</p>
                    <p className="text-gray-500">Westkerseweg, Scherpenisse | +31 687543605</p>
                    <p className="text-teal-600">stephanie_cor@hotmail.com</p>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-teal-600">Profiel</h2>
                <p className="text-gray-700 mt-2">
                    Verzorgende IG met ervaring en motivación para ayudar a otros, dispuesta a verbeteren
                    continuamente sus conocimientos y habilidades.
                </p>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-teal-600">Werkervaring</h2>
                <ul className="list-disc list-inside mt-2 space-y-4">
                    <li>
                        <strong className="text-teal-700">Zzp'er Stephanie Verzorgende IG, Nederland (2022-2024)</strong>
                        <p className="text-gray-700">
                            Ervaring in zorginstellingen zoals Thebe, Avoord, Mijzo BRD, TanteLouise in
                            verschillende afdelingen (PG, Somatiek, NAH, Revalidatie, etc.).
                        </p>
                    </li>
                    <li>
                        <strong className="text-teal-700">Woonzorgcentrum Tante Louise (2020-2022)</strong>
                        <p className="text-gray-700">
                            Begeleiding en ondersteuning van bewoners, met focus en motivación para
                            stabilizar y mejorar su kwaliteit van leven.
                        </p>
                    </li>
                    <li>
                        <strong className="text-teal-700">Hospital Mario Catarino Rivas, Honduras (2016-2017)</strong>
                        <p className="text-gray-700">
                            Verpleegkundige op de Gynaecologie en Verloskamer.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-teal-600">Opleiding</h2>
                <ul className="list-disc list-inside mt-2 space-y-4">
                    <li>
                        <strong className="text-teal-700">Bachelor Verpleegkunde</strong> - Universidad Nacional Autonoma de Honduras (2011-2017)
                    </li>
                    <li>
                        <strong className="text-teal-700">Middelbare school</strong> - Instituto International Tecnologico (2009-2010)
                    </li>
                    <li>
                        <strong className="text-teal-700">Bassischool</strong> - San Juan Bosco (1998-2008)
                    </li>
                </ul>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-teal-600">Vaardigheden</h2>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Samenwerken: 9/10</li>
                    <li>Kritisch denken: 9/10</li>
                    <li>Kwantitatief en kwalitatief onderzoek: 9/10</li>
                    <li>Communicatie, creativiteit, dynamiek: 10/10</li>
                    <li>Probleem oplossen: 9/10</li>
                </ul>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-teal-600">Talen</h2>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Spaans: Moedertaal</li>
                    <li>Engels: 7/10</li>
                    <li>Nederlands: 10/10</li>
                </ul>
            </div>
        </div>
    </div>
);
};

export default TopNav