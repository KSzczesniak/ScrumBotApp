import React, { Component } from 'react'

import Sidebar from '../compoments/Sidebar/Sidebar'
import Navbar from '../compoments/Navbar/Navbar'
import Main from '../compoments/Main/Main'
import Footer from '../compoments/Footer/Footer'
import Wrapper from '../compoments/Wrapper/Wrapper'


class Layout extends Component {

    state = {
        showSideBar: true
    }

    render() {
        return (
            <Wrapper>
                <Main>
                    <Navbar />
                    {this.props.children}
                    <Footer />
                </Main>
                <Sidebar />

            </Wrapper>
        )
    }
}

export default Layout
