import React, { useState } from 'react'
import react from '@vitejs/plugin-react';

const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const Ejercicio1: react.FC = () => {
    const [pares, setPares] = useState<number[]>([]);
    const [impares, setImpares] = useState<number[]>([]);
    const [clasificado, setClasificado] = useState(false);

    const handleClasificar = () => {
        setPares(numeros, filter(n => n % 2 === 0));
        setImpares(numeros.filter(n => n % 2 !== 0));
        setClasificado(true);
    }
    return (
        <div className="text-center mt-6">
            <h2 className="text-x1 font-bold text-blue-400">Bienvenido</h2>
            <p className="mt-2">
                <strong>Vector: </strong>
            </p>
            <button>

            </button>
        </div>
    )
}

export default Ejercicio1
