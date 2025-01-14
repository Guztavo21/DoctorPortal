using DoctorPortal.Backend.Models;
using DoctorPortal.Backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace DoctorPortal.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientsController : ControllerBase
    {
        private readonly IPatientRepository _patientRepository;

        public PatientsController(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Patient>>> GetAllPatients()
        {
            var patients = await _patientRepository.GetAllAsync();
            return Ok(patients);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatientById(int id)
        {
            var patient = await _patientRepository.GetByIdAsync(id);
            if (patient == null)
            {
                return NotFound();
            }
            return Ok(patient);
        }

        [HttpPost]
        public async Task<ActionResult> Create(Patient patient)
        {
            await _patientRepository.AddAsync(patient);
            return CreatedAtAction(nameof(GetPatientById), new { id = patient.Id }, patient);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Patient patient)
        {
            if (id != patient.Id)
            {
                return BadRequest();
            }
            var foundPatient = await _patientRepository.GetByIdAsync(id);
            if (foundPatient == null)
            {
                return NotFound();
            }
            await _patientRepository.UpdateAsync(foundPatient);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var patient = await _patientRepository.GetByIdAsync(id);
            if (patient == null)
            {
                return NotFound();
            }

            await _patientRepository.DeleteAsync(id);
            return NoContent();
        }
    }
}
