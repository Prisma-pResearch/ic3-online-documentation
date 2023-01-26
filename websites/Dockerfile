FROM node:alpine3.16

ENV http_proxy=http://proxe.shands.ufl.edu:3128
ENV https_proxy=http://proxe.shands.ufl.edu:3128
EXPOSE 3000
RUN apk add git curl vim 
RUN git clone https://github.com/Chesterguan/ic3-online-documentation.git
ADD run.sh /
RUN chmod +x /run.sh
ENTRYPOINT ./run.sh

