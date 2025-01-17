import { useState, useEffect } from 'react';
import { Table, Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const VerPacientes = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer una llamada a una API para obtener la lista de pacientes
    // Por ahora, usaremos datos estáticos como ejemplo
    const fetchPatients = async () => {
      const data = [
        { key: '1', name: 'Juan Pérez', age: 30, condition: 'Hipertensión' },
        { key: '2', name: 'María López', age: 25, condition: 'Diabetes' },
        { key: '3', name: 'Carlos García', age: 40, condition: 'Asma' },
      ];
      setPatients(data);
    };

    fetchPatients();
  }, []);

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Edad',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Condición',
      dataIndex: 'condition',
      key: 'condition',
    },
  ];

  return (
    <Layout style={{ minHeight: '87vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Content style={{ padding: '50px', width: '100%', maxWidth: '800px' }}>
        <div style={{ background: '#fff', padding: 24, borderRadius: '15px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <Title level={2}>Lista de Pacientes</Title>
          <Table dataSource={patients} columns={columns} pagination={false} />
        </div>
      </Content>
    </Layout>
  );
};

export default VerPacientes;