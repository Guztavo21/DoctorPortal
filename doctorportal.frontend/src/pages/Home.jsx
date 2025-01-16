import React from 'react';
import { Layout, Typography, Button, Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const Home = () => {
  return (
    <Layout style={{ minHeight: '87vh' }}>
      <Content style={{ padding: '50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Title level={2}>
            <HomeOutlined /> Bienvenido al Portal de Doctor
          </Title>
          <Paragraph>
            Esta es la página de inicio donde puedes acceder a las funciones principales de la aplicación.
          </Paragraph>

          <Space>
            <Button type="primary">Ver Pacientes</Button>
            <Button>Ingreso Paciente</Button>
          </Space>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
