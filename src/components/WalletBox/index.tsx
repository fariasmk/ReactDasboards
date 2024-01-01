import React from "react";
import CountUp from 'react-countup';

import dolarImg from '../../assets/dolar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import { Container } from "./styles";

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerLabel: string;
    icon: "dolar" | "arrowUp" | "arrowDown";
    color: string;
} 
 
const WalletBox: React.FC<IWalletBoxProps> = ({
    title, amount, footerLabel, icon, color
}) => {

	return (
        <Container color={color}>
            <span>{ title }</span>
            <h1>
                <CountUp
                    start={ 0 }
                    end={ amount }
                    prefix="R$ "
                    separator="."
                    decimal=","         
                    decimals={ 2 }
                />
            </h1>
            <small>{footerLabel}</small>
            
            <img src={ icon === "dolar" ? dolarImg : icon === "arrowUp" ? arrowUpImg : arrowDownImg } alt={ icon } />
		</Container>
	)
}
 
export default WalletBox;