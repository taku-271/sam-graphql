ARG PWD

FROM oven/bun:debian AS dev

WORKDIR ${PWD}

RUN apt-get update && apt-get install -y docker.io wget unzip curl gpg

# samのインストール
# RUN wget https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-arm64.zip
# RUN unzip aws-sam-cli-linux-arm64.zip -d sam-installation
RUN wget https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.zip
RUN unzip aws-sam-cli-linux-x86_64.zip -d sam-installation
RUN ./sam-installation/install --update
RUN sam --version
RUN rm -rf aws-sam-cli-linux-arm64.zip sam-installation

# aws cliのインストール
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install
RUN rm -rf ./aws ./awscliv2.zip

# sudoの設定
ARG USERNAME=bun
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME\
    && chmod 0440 /etc/sudoers.d/$USERNAME

# gitの設定
RUN git config --global --add safe.directory '*'
