package application.core.app.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors() // Habilita o CORS
                .and()
                .csrf().disable() // Opcional, dependendo da sua autenticação
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // Ajuste conforme necessário
                );

        return http.build();
    }
}


