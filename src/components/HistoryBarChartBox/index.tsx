import React from "react";

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import { Container, ChartContainer, Header, LegendContainer, Legend  } from "./styles";
 
interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

const HistoryBarChartBox: React.FC<IHistoryBoxProps> = ({ data, lineColorAmountEntry, lineColorAmountOutput}) => (
    <Container>
        <Header>
            <h2>Histórico de saldo</h2>

            <LegendContainer>
                <Legend color={lineColorAmountEntry}>
                    <div></div>
                    <span>Entradas</span>
                </Legend>
                <Legend color={lineColorAmountOutput}>
                    <div></div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>
        </Header>
        
        <ChartContainer>
            <ResponsiveContainer>
                <BarChart
                    data={ data }
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                    <XAxis dataKey="month" stroke="#cecece" />
                    <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                    <Bar
                        // type="monotone"                 
                        dataKey="amountEntry"
                        name="Entradas"
                        fill="#ffb86c" activeBar={<Rectangle fill="none" stroke="lineColorAmountEntry" />}
                    />
                    <Bar
                        // type="monotone"
                        dataKey="amountOutput"
                        name="Saídas"
                        fill="#ff5555" activeBar={<Rectangle fill="none" stroke="lineColorAmountEntry" />}
                    />
                </BarChart>
            </ResponsiveContainer>
        </ChartContainer>
    </Container>
)
 
export default HistoryBarChartBox;         