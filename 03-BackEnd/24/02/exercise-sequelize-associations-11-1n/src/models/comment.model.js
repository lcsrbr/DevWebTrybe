// id: Chave primária de indexação dos comentários. Valor do tipo inteiro;
// message: Campo responsável por armazenar o texto de um comentário de uma determinada conta. Valor do tipo string (varchar no SGBD);
// upvoting: Campo responsável por armazenar a quantidade de votos positivos que um determinado comentário recebeu. Valor do tipo integer;
// downvoting: Campo responsável por armazenar a quantidade de votos negativos que um determinado comentário recebeu. Valor do tipo integer;
// accountId: Chave estrangeira de indexação de um registro de perfil com sua respectiva conta. Valor do tipo inteiro.

// src/models/Comment.model.js

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      message: DataTypes.STRING,
      upvoting: DataTypes.INTEGER,
      downvoting: DataTypes.INTEGER,
      accountId: { type: DataTypes.INTEGER, foreignKey: true },
      // A declaração da Foreign Key é opcional no model
    },
    {
      timestamps: false,
      tableName: "Comments",
      underscored: true,
    }
  );

  Comment.associate = (models) => {
    Comment.belongsTo(models.Account,
      { foreignKey: 'accountId', as: 'accounts' });
  };

  return Comment;
};
