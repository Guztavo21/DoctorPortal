using DoctorPortal.Backend.Models;

namespace DoctorPortal.Backend.Repositories.InMemory
{
    public class InMemoryPatientRepository : IPatientRepository
    {
        private readonly List<Patient> _patients = [];

        public InMemoryPatientRepository()
        {
            _patients =
            [
                new() {
                    Id = 1,
                    FirstName = "John",
                    LastName = "Doe",
                    Email = "johndoe@example.com",
                    Phone1 = "123-456-7890",
                    Phone2 = 987654321,
                    DateOfBirth = new DateTime(1990, 5, 15),
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                },
                new() {
                    Id = 2,
                    FirstName = "Jane",
                    LastName = "Smith",
                    Email = "janesmith@example.com",
                    Phone1 = "987-654-3210",
                    Phone2 = 123456789,
                    DateOfBirth = new DateTime(1985, 7, 20),
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                }
            ];
        }

        public Task<IEnumerable<Patient>> GetAllAsync()
        {
            return Task.FromResult(_patients.AsEnumerable());
        }

        public Task<Patient> GetByIdAsync(int id)
        {
            var patient = _patients.FirstOrDefault(p => p.Id == id);
            return Task.FromResult(patient);
        }

        public Task AddAsync(Patient patient)
        {
            patient.Id = _patients.Count > 0 ? _patients.Max(p => p.Id) + 1 : 1;
            _patients.Add(patient);
            return Task.CompletedTask;
        }

        public Task UpdateAsync(Patient patient)
        {
            var existingPatient = _patients.FirstOrDefault(p => p.Id == patient.Id);
            if (existingPatient != null)
            {
                existingPatient.FirstName = patient.FirstName;
                existingPatient.LastName = patient.LastName;
                existingPatient.Email = patient.Email;
                existingPatient.Phone1 = patient.Phone1;
                existingPatient.Phone2 = patient.Phone2;
                existingPatient.DateOfBirth = patient.DateOfBirth;
                existingPatient.UpdatedAt = DateTime.UtcNow;
            }
            return Task.CompletedTask;
        }

        public Task DeleteAsync(int id)
        {
            var patient = _patients.FirstOrDefault(p => p.Id == id);
            if (patient != null)
            {
                _patients.Remove(patient);
            }
            return Task.CompletedTask;
        }
    }
}
