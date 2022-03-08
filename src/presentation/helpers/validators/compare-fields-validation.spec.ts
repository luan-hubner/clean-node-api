import { InvalidParamError } from '../../errors'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('any_field', 'any_field_to_compare')
}

describe('CompareFields Validation', () => {
  test('should return a InvalidParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({
      any_field: 'any_value',
      any_field_to_compare: 'different_value'
    })
    expect(error).toEqual(new InvalidParamError('any_field_to_compare'))
  })

  test('should not return if validation succeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      any_field: 'any_value',
      any_field_to_compare: 'any_value'
    })
    expect(error).toBeFalsy()
  })
})
