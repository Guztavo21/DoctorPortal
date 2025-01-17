// src/pages/IngresoPaciente.js
import { useState } from "react";
import { Input, Button, Form, message, Row, Col, Select, Radio } from "antd";

const IngresoPaciente = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    dni: "",
    rut: "",
    sexo: "",
    direccion: "",
    telefono: "",
    contactoEmergencia: "",
    seguroSalud: "",
    motivoConsulta: "",
    tipoIdentificacion: "rut", // Por defecto RUT
  });

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      tipoIdentificacion: e.target.value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    // Validación personalizada para RUT y DNI
    if (
      !formData.nombre ||
      !formData.apellido ||
      !formData.fechaNacimiento ||
      (!formData.dni && !formData.rut) || // Verifica que al menos uno de los dos esté lleno
      !formData.sexo ||
      !formData.direccion ||
      !formData.telefono ||
      !formData.contactoEmergencia ||
      !formData.seguroSalud ||
      !formData.motivoConsulta
    ) {
      message.error("Por favor, complete todos los campos.");
      return;
    }

    // Si ambos están llenos, muestra un error
    if (formData.dni && formData.rut) {
      message.error("Solo debe ingresar un valor entre RUT o DNI, no ambos.");
      return;
    }

    message.success("Paciente ingresado correctamente.");
    console.log(formData);
    setFormData({
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      dni: "",
      rut: "",
      sexo: "",
      direccion: "",
      telefono: "",
      contactoEmergencia: "",
      seguroSalud: "",
      motivoConsulta: "",
      tipoIdentificacion: "rut", // Resetear a RUT
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Ingreso de Paciente</h1>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Tipo de Identificación" required>
              <Radio.Group
                name="tipoIdentificacion"
                value={formData.tipoIdentificacion}
                onChange={handleRadioChange}
              >
                <Radio value="rut">RUT</Radio>
                <Radio value="dni">DNI</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        {/* Condicional para mostrar RUT o DNI según la selección */}
        <Row gutter={16}>
          <Col span={12}>
            {formData.tipoIdentificacion === "rut" ? (
              <Form.Item label="RUT" required>
                <Input
                  type="text"
                  name="rut"
                  value={formData.rut}
                  onChange={handleChange}
                  placeholder="Ingrese el RUT del paciente"
                />
              </Form.Item>
            ) : (
              <Form.Item label="DNI" required>
                <Input
                  type="text"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                  placeholder="Ingrese el DNI del paciente"
                />
              </Form.Item>
            )}
          </Col>
          <Col span={12}>
            <Form.Item label="Nombre" required>
              <Input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingrese el nombre del paciente"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Apellido" required>
              <Input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Ingrese el apellido del paciente"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Fecha de Nacimiento" required>
              <Input
                type="date"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Sexo" required>
              <Select
                name="sexo"
                value={formData.sexo}
                onChange={(value) => handleSelectChange("sexo", value)}
                placeholder="Seleccione el sexo"
              >
                <Select.Option value="M">Masculino</Select.Option>
                <Select.Option value="F">Femenino</Select.Option>
                <Select.Option value="Otro">Otro</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Dirección" required>
              <Input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Ingrese la dirección"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Teléfono" required>
              <Input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ingrese el teléfono"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Contacto de Emergencia" required>
              <Input
                type="text"
                name="contactoEmergencia"
                value={formData.contactoEmergencia}
                onChange={handleChange}
                placeholder="Nombre y teléfono del contacto"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Seguro de Salud" required>
              <Input
                type="text"
                name="seguroSalud"
                value={formData.seguroSalud}
                onChange={handleChange}
                placeholder="Ingrese el seguro de salud"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Motivo de la Consulta" required>
              <Input
                type="text"
                name="motivoConsulta"
                value={formData.motivoConsulta}
                onChange={handleChange}
                placeholder="Ingrese el motivo de la consulta"
              />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" onClick={handleSubmit}>
          Ingresar Paciente
        </Button>
      </Form>
    </div>
  );
};

export default IngresoPaciente;
