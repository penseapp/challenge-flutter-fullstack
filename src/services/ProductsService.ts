import { getCustomRepository, Repository } from "typeorm"
import * as Yup from 'yup'
import { Product } from "../entities/Product"
import { ProductsRepository } from "../repositories/ProductRepository"

interface ICreateProducts {
  name: string;
  description?: string;
  price: number;
  promotional_price?: number;
  status_flag?: 'Disponível' | 'Indisponível';
  category?: string;
  image_url?: string;
}

interface IUpdateProducts {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  promotional_price?: number;
  status_flag?: 'Disponível' | 'Indisponível';
  category?: string;
  image_url?: string;
}

class ProductsService {
  private productsRepository: Repository<Product>

  constructor() {
    this.productsRepository = getCustomRepository(ProductsRepository)
  }

  async create({ name, description, price, promotional_price, status_flag, category, image_url }: ICreateProducts) {

    const data = {
      name,
      description,
      price,
      promotional_price,
      status_flag,
      category,
      image_url
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().optional(),
      price: Yup.number().required(),
      promotional_price: Yup.number().optional(),
      status_flag: Yup.string().optional().oneOf(["Disponível", "Indisponível"]),
      category: Yup.string().optional().oneOf(["Móveis", "Eletrônicos", "Periféricos"]),
      image_url: Yup.string().optional(),
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const product = this.productsRepository.create(data)

    await this.productsRepository.save(product)

    return {
      status: 201,
      message: "Produto adicionado com sucesso!",
      product
    }

  }

  async update({ id, name, description, price, promotional_price, status_flag, category, image_url }: IUpdateProducts) {

    const productExists = await this.productsRepository.findOne({ id })
    if (!productExists) {
      return {
        status: 409,
        message: 'Nenhum produto foi encontrado!'
      }
    }

    const data = {
      id,
      name,
      description,
      price,
      promotional_price,
      status_flag,
      category,
      image_url
    }

    const schema = Yup.object().shape({
      id: Yup.string().required(),
      name: name === undefined ? null : Yup.string().optional(),
      description: description === undefined ? null : Yup.string().optional(),
      price: price === undefined ? null : Yup.number().optional(),
      promotional_price: promotional_price === undefined ? null : Yup.number().optional(),
      status_flag: status_flag === undefined ? null : Yup.string().optional().oneOf(["Disponível", "Indisponível"]),
      category: category === undefined ? null : Yup.string().optional().oneOf(["Móveis", "Eletrônicos", "Vestuário"]),
      image_url: image_url === undefined ? null : Yup.string().optional(),
    })

    await schema.validate(data, {
      abortEarly: false
    })

    await this.productsRepository.save(data)

    return {
      status: 200,
      message: "Produto alterado com sucesso!"
    }

  }

  async delete(id: string) {

    const productExists = await this.productsRepository.findOne({ id })
    if (!productExists) {
      return {
        status: 409,
        message: 'Nenhum produto foi encontrado!'
      }
    }

    await this.productsRepository.delete({ id })

    return {
      status: 200,
      message: 'Produto deletado com sucesso!'
    }
  }

  async list_all() {

    const list = await this.productsRepository.find()

    return {
      status: 200,
      list
    }
  }

  async listById(id: string) {

    const list = await this.productsRepository.find({ id })
    if (!list) {
      return {
        status: 409,
        message: 'Produto não foi encontrado!'
      }
    }

    return {
      status: 200,
      list
    }
  }

}

export { ProductsService }