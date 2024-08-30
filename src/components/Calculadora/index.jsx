import { useState } from "react";
import './calculadora.css'


const Calculadora= () =>{

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)


    const calculaImc = () =>{
        const alturaAoQuadrado = (altura * altura);
        const media = peso/alturaAoQuadrado
        return media.toFixed(2);
    }

    const tabelaPeso = () => {
        const imc = calculaImc()

        if(imc <= 16){
            return (<p>Magreza grave</p>)
        }if(imc > 16 && imc <= 16.9){
            return (<p>Magreza moderada</p>)
        }if(imc > 16.9 && imc <= 18.5){
            return (<p>Magreza leve</p>)
        }if(imc > 18.5 && imc <= 24.9){
            return (<p>Peso ideal</p>)
        }if(imc > 24.9 && imc <= 29.9){
            return (<p>Sobrepeso</p>)
        }if(imc > 29.9 && imc <= 34.9){
            return (<p>Obesidade grau I</p>)
        }if(imc > 34.9 && imc <= 39.9){
            return (<p>Obesidade grau II</p>)
        }else{
            return(<p>Obesidade mórbida</p>)
        }
        
    }

    return (
        <form action="">
            <input onChange={e => setAltura(e.target.value)} type="number" placeholder="Digite sua altura" />
            <input onChange={e => setPeso(e.target.value)} type="number" placeholder="Digite seu peso"/>
            
            <table>
                <tr>
                    <td>{calculaImc()}</td>
                    <td>{tabelaPeso()}</td>
                </tr>
            </table>
        </form>
    )
}
export default Calculadora;