import React, { Component } from 'react'

import Sidebar from '../compoments/UI/Sidebar/Sidebar'
import Navbar from '../compoments/UI/Navbar/Navbar'
import Main from '../compoments/UI/Main/Main'
import Content from '../compoments/UI/Content/Content'
import Footer from '../compoments/UI/Footer/Footer'
import Wrapper from '../hoc/Wrapper/Wrapper'


class Layout extends Component {

    state = {
        showSideBar: true
    }

    render() {
        return (
            <Wrapper>
                <Main>
                    <Navbar />
                    <Content>
                        {this.props.children}
                    </Content>
                    <Footer />
                </Main>
                <Sidebar />
            </Wrapper>
        )
    }
}

export default Layout
