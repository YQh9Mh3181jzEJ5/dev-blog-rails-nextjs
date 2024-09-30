FROM ruby:3.1.2

ARG USER_ID
ARG GROUP_ID

RUN apt-get update -qq && apt-get install -y vim

RUN groupadd -g ${GROUP_ID} appuser \
    && useradd -u ${USER_ID} -g appuser -m appuser

RUN mkdir /myapp && chown appuser:appuser /myapp
WORKDIR /myapp

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

USER appuser

COPY --chown=appuser:appuser Gemfile /myapp/Gemfile
COPY --chown=appuser:appuser Gemfile.lock /myapp/Gemfile.lock

RUN gem update --system
RUN bundle update --bundler

RUN bundle install
COPY --chown=appuser:appuser . /myapp

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]