import { useDispatch, useSelector } from "react-redux";
import { Container, Segment } from "semantic-ui-react";
import { RootState } from "../../redux/rootReducer";
import Head from 'next/head'
import Router from "next/router";
import Menu from "./menu";
import { RootActions } from "../../redux/rootActions";
import { useEffect } from "react";

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state: RootState) => state.application.loading);

    useEffect(() => {
        const start = () => {
            dispatch(RootActions.applicationActions.beginLoading())
        };
        const end = () => {
            dispatch(RootActions.applicationActions.stopLoading())
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);

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