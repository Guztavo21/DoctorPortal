import { Layout, Typography, Button, Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const Home = () => {
  return (
    <Layout style={{ minHeight: '87vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Content style={{ padding: '50px', width: '100%', maxWidth: '800px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380, borderRadius: '15px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <Title level={2}>
            <HomeOutlined /> Bienvenido al Portal de Doctor
          </Title>
          <Paragraph>
            Esta es la página de inicio donde puedes acceder a las funciones principales de la aplicación.
          </Paragraph>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Space>
              <Link to="/pacientes">
                <Button type="primary">Ver Pacientes</Button>
              </Link>
              <Link to="/ingreso-paciente">
                <Button>Ingreso Paciente</Button>
              </Link>
            </Space>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;