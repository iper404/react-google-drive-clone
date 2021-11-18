import React from 'react'
import { Container } from "react-bootstrap"
import AddFolderButton from './AddFolderButton'
import Navbar from "./Navbar"

export default function Dashboard() {
    return <>
            <Navbar></Navbar>
            <Container fluid>
                <AddFolderButton></AddFolderButton>
            </Container>
    </>
}
