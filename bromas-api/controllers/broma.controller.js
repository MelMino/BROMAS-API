const mongoose = require('mongoose');
const modelJokes = require("../models/broma.model");

// Obtiene todas las bromas
const ver_todos = async (req, res) => {
    try {
        const jokesList = await modelJokes.find();
        res.status(200).json(jokesList);
    } catch (err) {
        res.status(500).json({ message: "Error al obtener bromas", error: err.message });
    }
};

// Obtiene una broma por su ID
const ver = async (req, res) => {
    try {
        const id = req.params.idJoke;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }
        const jokeById = await modelJokes.findById(id);
        if (!jokeById) {
            return res.status(404).json({ message: "Broma no encontrada" });
        }
        res.status(200).json(jokeById);
    } catch (err) {
        res.status(500).json({ message: "Error al obtener la broma", error: err.message });
    }
};

// Crea una nueva broma
const crear = async (req, res) => {
    try {
        const newDataJoke = req.body;
        const newJoke = await modelJokes.create(newDataJoke);
        res.status(201).json(newJoke);
    } catch (err) {
        res.status(500).json({ message: "Error al crear la broma", error: err.message });
    }
};

// Actualiza una broma existente por su ID
const editar = async (req, res) => {
    try {
        const id = req.params.idJoke;
        const jokeData = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }
        const jokeUpdate = await modelJokes.findByIdAndUpdate(id, jokeData, { new: true });
        if (!jokeUpdate) {
            return res.status(404).json({ message: "Broma no encontrada" });
        }
        res.status(200).json(jokeUpdate);
    } catch (err) {
        res.status(500).json({ message: "Error al actualizar la broma", error: err.message });
    }
};

// Elimina una broma por su ID
const borrar = async (req, res) => {
    try {
        const id = req.params.idJoke;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }
        const jokeDelete = await modelJokes.findByIdAndDelete(id);
        if (!jokeDelete) {
            return res.status(404).json({ message: "Broma no encontrada" });
        }
        res.status(200).json({ message: "Broma eliminada" });
    } catch (err) {
        res.status(500).json({ message: "Error al eliminar la broma", error: err.message });
    }
};

module.exports = { ver_todos, ver, crear, editar, borrar };
