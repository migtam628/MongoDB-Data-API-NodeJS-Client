type TAction =
  | "findOne"
  | "find"
  | "insertOne"
  | "insertMany"
  | "updateOne"
  | "updateMany"
  | "replaceOne"
  | "deleteOne"
  | "deleteMany"
  | "aggregate";

declare enum EActionTypes {
  findOne = "findOne",
  find = "find",
  insertOne = "insertOne",
  insertMany = "insertMany",
  updateOne = "updateOne",
  updateMany = "updateMany",
  replaceOne = "replaceOne",
  deleteOne = "deleteOne",
  deleteMany = "deleteMany",
  aggregate = "aggregate",
}

interface IDefaultBody {
  dataSource?: string;
  database?: string;
  collection?: string;
}

type IAllBodyTypes = IFindBody &
  IFindOneBody &
  IInsertOneBody &
  IInsertManyBody &
  IUpdateBody &
  IUpdateManyBody &
  IReplaceOneBody &
  IDeleteOneBody &
  IDeleteManyBody &
  IAggregateBody;

type TMongoAPIBody = IAllBodyTypes & {
  action: TAction;
};

interface IFindOneBody {
  filter?: any;
  projection?: any;
}

interface IFindBody {
  filter?: any;
  projection?: any;
  sort?: any;
  limit?: any;
  skip?: any;
}

interface IInsertOneBody {
  document?: any;
}

interface IInsertManyBody {
  documents?: any[];
}

interface IUpdateBody {
  filter?: any;
  update?: any;
  upsert?: boolean;
}

interface IUpdateManyBody {
  filter?: any;
  update?: any;
  upsert?: boolean;
}

interface IReplaceOneBody {
  filter?: any;
  replacement?: any;
  upsert?: boolean;
}

interface IDeleteOneBody {
  filter?: any;
}

interface IDeleteManyBody {
  filter?: any;
}

interface IAggregateBody {
  pipeline?: any[];
}

interface IAction {
  action: TAction;
}

type TFindOneBody = IFindOneBody & IAction & IDefaultBody;
type TFindBody = IFindBody & IAction & IDefaultBody;
type TInsertManyBody = IInsertManyBody & IAction & IDefaultBody;
type TInsertOneBody = IInsertOneBody & IAction & IDefaultBody;
type TUpdateBody = IUpdateBody & IAction & IDefaultBody;
type TUpdateManyBody = IUpdateManyBody & IAction & IDefaultBody;
type TReplaceOneBody = IReplaceOneBody & IAction & IDefaultBody;
type TDeleteOneBody = IDeleteOneBody & IAction & IDefaultBody;
type TDeleteManyBody = IDeleteManyBody & IAction & IDefaultBody;
type TAggregateBody = IAggregateBody & IAction & IDefaultBody;
