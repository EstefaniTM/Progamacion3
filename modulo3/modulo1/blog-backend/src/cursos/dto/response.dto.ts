/*@Get()
async findAll(
  @Query('page') page = 1,
  @Query('limit') limit = 10,
  @Query('isActive') isActive?: string,
): Promise<SuccessResponseDto> {
  if (isActive !== undefined && isActive !== 'true' && isActive !== 'false') {
    throw new BadRequestException('Invalid value for "isActive" query param. Use "true" or "false".');
  }

  // Convertir isActive a booleano si está definido
  const isActiveBool = isActive === undefined ? undefined : isActive === 'true';

  limit = limit > 100 ? 100 : limit;

  // Llamar al servicio cursosService
  const cursos = await this.cursosService.findAll({ page, limit }, isActiveBool);

  return new SuccessResponseDto('Cursos obtenidos exitosamente', cursos);
}
*/