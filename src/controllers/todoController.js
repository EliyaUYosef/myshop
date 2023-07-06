const Handler = require("../handler/todoHandler");

exports.createTodo = async (req, res) => {
  console.log("CREATE - ", req.body);
  try {
    const newNote = { ...req.body };
    const createResult = await Handler.createOne(newNote);
    console.log("createResult", createResult);
    if (createResult) res.status(200).json(newNote);
    else return res.status(404).json({ message: "create todo is failed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.showAllTodos = async (req, res) => {
  console.log(GREEN + "ShowAll" + RESET, req.params, req.body);
  try {
    const todos = await Handler.getAll();
    // console.log(todos);
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getUserTodo = async (req, res) => {
  console.log(GREEN + "getUserTodo" + RESET, req.params, req.body);
  try {
    const userId = req.params.userId ?? 0;
    const todos = await Handler.getAll(userId);
    // console.log(todos);
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateTodo = async (req, res) => {
  console.log(GREEN + "UPDATE" + RESET, req.params, req.body);
  try {
    const reqTodo = req.body;
    const reqTodoId = parseInt(req.params?.todoId);
    const resultTodo = await Handler.updateAndReturnTodo(reqTodoId, reqTodo);
    if (!resultTodo) return res.status(404).json({ message: "Todo not found" });
    return res.status(200).json(resultTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteTodo = async (req, res) => {
  console.log(GREEN + "DELETE" + RESET, req.params, req.body);
  try {
    const todo = await Handler.deleteTodo(parseInt(req.params.todoId));
    if (!todo) return res.status(404).json({ message: "Todo not found" });

    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
