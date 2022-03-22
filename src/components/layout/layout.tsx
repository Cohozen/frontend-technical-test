import { useSelector } from "react-redux";
import { Container, Segment } from "semantic-ui-react";
import { RootState } from "../../redux/rootReducer";
import Head from 'next/head'
import Menu from "./menu";

const Layout = ({ children }) => {
    const loading = useSelector((state: RootState) => state.application.loading);

    return (
        <>
            <Head>
                <title>Frontend Technical test - Leboncoin</title>
                <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
            </Head>
            <Container style={{ paddingTop: 20 }}>
                <Menu />
                <Segment attached padded loading={loading}>
                    {children}
                </Segment>
            </Container>
        </>
    )
}

export default Layout;