using DoctorPortal.Backend.Repositories;
using DoctorPortal.Backend.Repositories.InMemory;

var builder = WebApplication.CreateBuilder(args);


#region "CORS"
var allowedOrigin = builder.Environment.IsDevelopment()
    ? builder.Configuration["AllowedOrigins:Development"]
    : builder.Configuration["AllowedOrigins:Production"];

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.AllowAnyOrigin()
             .AllowAnyMethod()
             .AllowAnyHeader();
        });
});
#endregion

#region "REPOSITORIOS"
builder.Services.AddSingleton<IPatientRepository, InMemoryPatientRepository>();
#endregion

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowFrontend");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
