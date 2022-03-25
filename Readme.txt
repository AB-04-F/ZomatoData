========== Update Package ==========
npm install

========== SET mysql cred in .env ==========


========== Update Models ==========
sequelize-auto -o "./models" -d zomatodata -h localhost -u root -p 3306 -x  -e mysql -t menu_iteam


========== Start Project ==========
node server

