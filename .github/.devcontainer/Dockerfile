FROM ruby:2.7

ARG USERNAME=vscode

RUN apt-get update -yqq && \
    apt-get install curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y \
    nodejs

RUN gem install rubocop:'~> 1.7' rubocop-rails:'~>2.9' solargraph:'~>0.40'