// pages/admin.js
import React from 'react';
import styled from 'styled-components';

const AdminPage = () => {
  return (
    <Container>
      <Header>
        <h1>Admin Dashboard</h1>
      </Header>
      <Content>
        <Sidebar>
          <SidebarItem>Dashboard</SidebarItem>
          <SidebarItem>Users</SidebarItem>
          <SidebarItem>Settings</SidebarItem>
        </Sidebar>
        <MainContent>
          {/* Your main content goes here */}
          <h2>Welcome to the Admin Dashboard!</h2>
          <p>This is a beautiful admin page designed with Next.js and Styled Components.</p>
        </MainContent>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Sidebar = styled.nav`
  background-color: #555;
  color: white;
  width: 200px;
  padding: 20px;
`;

const SidebarItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: #00bcd4;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

export default AdminPage;

