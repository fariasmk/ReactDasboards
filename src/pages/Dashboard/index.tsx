import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import { Container } from "./styles";

const Dashboard: React.FC = () => {

    const options = [
        { value: 'Dracula', label: 'Dracula' },
        { value: 'Dark', label: 'Dark' },
        { value: 'Light', label: 'Light' }
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#ffb86c">
                <SelectInput options={options} onChange={() => {}}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard