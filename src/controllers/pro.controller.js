import Produc from "../models/Task";

export const RenderPro = async (req, res) => {
  const producs = await Produc.find().lean();

  res.render("index", { producs: producs });
};

export const RenderProTab = async (req, res) => {
  const producs = await Produc.find().lean();

  res.render("almacen", { producs: producs });
};

export const RenderProTab1 = async (req, res) => {
  const producs = await Produc.find({"nombre" : "	Jose Cuervo"}).lean();

  res.render("query1", { producs: producs });
};
export const RenderProTab2 = async (req, res) => {
  const producs = await Produc.find({"contenido" : 700}).lean();

  res.render("query2", { producs: producs });
};
export const RenderProTab3 = async (req, res) => {
  const producs = await Produc.find({"tipo" : "Whisky"}).lean();

  res.render("query3", { producs: producs });
};
export const RenderProTab4 = async (req, res) => {
  const producs = await Produc.find({"disponibles" : {"$gt":"10"}}).lean();

  res.render("query4", { producs: producs });
};

export const AddPro = async (req, res) => {
  try {
    const produc = Produc(req.body);

    await produc.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const EditPro = async (req, res) => {
  try {
    const produc = await Produc.findById(req.params.id).lean();

    res.render("edit", { produc });
  } catch (error) {
    console.log(error.message);
  }
};

export const UpdatePro = async (req, res) => {
  const { id } = req.params;

  await Produc.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const EliminarPro = async (req, res) => {
  const { id } = req.params;

  await Produc.findByIdAndDelete(id);

  res.redirect("/");
};
