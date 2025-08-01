import React, { useState } from 'react'

const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const Ejercicio1: React.FC = () => {
    const [pares, setPares] = useState<number[]>([]);
    const [impares, setImpares] = useState<number[]>([]);
    const [clasificado, setClasificado] = useState(false);

    const handleClasificar = () => {
        setPares(numeros.filter(n => n % 2 === 0));
        setImpares(numeros.filter(n => n % 2 !== 0));
        setClasificado(true);
    };

    return (
        <div className="text-center mt-6">
            <h2 className="text-x1 font-bold text-blue-400">Bienvenido</h2>
            <p className="mt-2">
                <strong>Vector: </strong>
            </p>
            <button onClick={handleClasificar} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Clasificar</button>
            {clasificado && (
                <div className="mt-4">
                    <p>
                        <strong>Pares:</strong> {pares.join(', ')}
                    </p>
                    <p>
                        <strong>Impares:</strong> {impares.join(', ')}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Ejercicio1
