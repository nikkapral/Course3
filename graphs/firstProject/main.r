install.packages("devtools")
library(devtools)
install_github("DougLuke/UserNetR")
library(UserNetR)
help(package="UserNetR")
install.packages("statnet")
library(statnet)


data(Moreno)
Moreno

plot(Moreno)

network.size(Moreno)
summary(Moreno)

#Плотность
Moreno
gden(Moreno)

components(Moreno)
#Наибольший компонент
lgc <- component.largest(Moreno, result="graph")
#Диаметр
gd <- geodist(lgc)
max(gd$gdist)

gtrans(Moreno, mode="graph")


netmatl <- rbind(c(0,1,1,0,0),
                 c(0,0,1,1,0),
                 c(0,1,0,0,0),
                 c(0,0,0,0,0),
                 c(0,0,1,0,0))
rownames(netmatl) <- c("A","B","C","D","E")                 
colnames(netmatl) <- c("A","B","C","D","E")                 
netl <- network(netmatl)
class(netl)
summary(netl)



plot(netl, vertical.cel=2, displaylable=TRUE)

network.size(netl)
summary(netl)

#Плотность
Moreno
gden(netl)

components(netl)
#Наибольший компонент
lgcnetl <- component.largest(netl, result="graph")
#Диаметр
gdnetl <- geodist(lgcnetl)
max(gdnetl$gdist)

gtrans(netl, mode="graph")



netmat2 <- rbind(c(1,2),
                 c(1,3),
                 c(2,3),
                 c(2,4),
                 c(3,2),
                 c(5,3))
net2 <- network(netmat2, matrix.type="edgelist")
network.vertex.names(net2) <- c("PARSI","MOSCOW","TVER","ROSTOV","SPB")
summary(net2)
as.sociomatrix(netl)
class(as.sociomatrix(netl))
all(as.matrix(netl) == as.sociomatrix(netl))
as.matrix(netl, matrix.type = "edgelist")

help("attribute.methods")

set.vertex.attribute(netl, "gender", c("F","F","M","F","M"))

netl %v% "alldeg" <- degree(netl)
list.vertex.attributes(netl)
summary(netl)

get.vertex.attribute(netl, "gender")
netl %v% "alldeg"

list.edge.attributes(netl)
set.edge.attribute(netl, "rndval",
  runif(network.size(netl),0,1))
  list.edge.attributes(netl)
summary(netl %e% "rndval")
summary(get.edge.attribute(netl))

netval1 <- rbind(c(0,2,3,0,0),
                 c(0,0,3,1,0),
                 c(0,1,0,0,0),
                 c(0,0,0,0,0),
                 c(0,0,2,0,0))

netval1 <- network(netval1, matrix.type="adjacency",ignore.eval=FALSE, names.eval="like")
network.vertex.names(netval1) <- c("A","B","C","D","E")
list.edge.attributes(netval1)
get.edge.attribute(netval1, "like")

as.sociomatrix(netval1)
as.sociomatrix(netval1,"like")

netval1 <- rbind(c(0,1,2,0,1),
                 c(0,0,3,0,0),
                 c(0,1,0,0,0),
                 c(0,1,0,0,0),
                 c(0,0,1,0,0))

netval2 <- network(netval1, matrix.type="adjacency",ignore.eval=FALSE, names.eval="set_status")
network.vertex.names(netval2) <- c("A","B","C","D","E")
list.edge.attributes(netval2)
get.edge.attribute(netval2, "set_status")

as.sociomatrix(netval1)
as.sociomatrix(netval2,"set_status")
as.sociomatrix(netval1,"like")
